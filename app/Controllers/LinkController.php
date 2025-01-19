<?php

namespace App\Controllers;

use App\Controllers\BaseController;
use App\Models\LinkModel;
use CodeIgniter\HTTP\ResponseInterface;
use CodeIgniter\API\ResponseTrait;

class LinkController extends BaseController
{
    use ResponseTrait;

    public function index(string $shortUrl): ResponseInterface
    {
        $linkModel = new LinkModel();
        $link = $linkModel->where('short_url', $shortUrl)->first();

        if ($link === null) {
            return $this->failNotFound();
        }

        if (isset($link['expiration_date']) && $link['expiration_date'] < date('Y-m-d H:i:s')) {
            $linkModel->delete($link['id']);
            return $this->failNotFound();
        }

        return redirect()->to($link['original_url']);
    }

    public function create(): ResponseInterface
    {
        $rules = [
            'original_url' => 'required|valid_url',
            'short_url' => 'required|is_unique[links.short_url]',
            'expiration_date' => 'permit_empty|valid_date',
        ];

        if (!$this->validate($rules)) {
            return $this->failValidationErrors($this->validator->getErrors());
        }

        $data = $this->request->getVar(["original_url", "short_url", "expiration_date"]);

        $linkModel = new LinkModel();
        try {
            if ($linkModel->save($data)) {
                return $this->respondCreated($data);
            }

            return $this->failServerError();
        } catch (\Exception $e) {
            return $this->failServerError($e->getMessage());
        }
    }
}
