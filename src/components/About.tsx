import { ReactTyped } from "react-typed";
import _ from "lodash";

export default function About() {
	return (
		<>
			<div className="ml-4 flex h-full max-w-xl flex-col gap-2.5 px-4 py-20 md:ml-20 lg:px-0">
				<p className="font-gagalin text-4xl text-gray-300/50 md:text-5xl lg:text-6xl">WHO AM I?</p>
				<ReactTyped className="font-gagalin text-lg" strings={["Saya adalah seorang Developer Full Stack dengan kecintaan terhadap pembuatan aplikasi web yang dinamis dan ramah pengguna."]} />
				<ReactTyped className="font-mono text-lg italic" strings={["Dengan latar belakang pendidikan di bidang INFORMATIKA, saya memiliki kemampuan yang luas dalam pengembangan frontend dan backend. Saya mahir dalam penggunaan HTML, CSS, JavaScript, React.js, Node.js, Express.js, Linux, dan Docker, yang memungkinkan saya untuk membangun aplikasi web yang responsif dan dinamis."]} />
				<hr className="my-4" />
				<table className="italic">
					<tbody>
						<tr>
							<td>Name</td>
							<td>{":"}</td>
							<td>AKHMAD FAUZAN</td>
						</tr>
						<tr>
							<td>Age</td>
							<td>{":"}</td>
							<td>{calculateAge("2005-08-06")}</td>
						</tr>
						<tr>
							<td>From</td>
							<td>{":"}</td>
							<td>{"INDONESIA"}</td>
						</tr>
						<tr>
							<td>Email</td>
							<td>{":"}</td>
							<td>ozan6825@gmail.com</td>
						</tr>
					</tbody>
				</table>
			</div>
		</>
	);
}

const calculateAge = (birthDate: string | number | Date) => {
	const today = new Date();
	const birthDateObj = new Date(birthDate);
	let age = today.getFullYear() - birthDateObj.getFullYear();
	const m = today.getMonth() - birthDateObj.getMonth();
	if (m < 0 || (m === 0 && today.getDate() < birthDateObj.getDate())) {
		age--;
	}
	return age;
};
