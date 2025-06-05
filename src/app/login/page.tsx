'use client';

import * as React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { signIn } from 'next-auth/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useRouter } from 'next/navigation';
import { IconLoader2 } from '@tabler/icons-react';

const loginSchema = yup.object().shape({
	email: yup.string().email().required().label('Email'),
	password: yup.string().required().label('Password'),
});

type LoginFormValues = yup.InferType<typeof loginSchema>;

export default function Page() {
	const [authError, setAuthError] = React.useState<string | null>(null);
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<LoginFormValues>({
		resolver: yupResolver(loginSchema),
	});
	const router = useRouter();

	const onSubmit = async (data: LoginFormValues) => {
		setAuthError(null);
		try {
			const callbackUrl = '/blog/dashboard'; // Atau halaman tujuan setelah login berhasil
			const result = await signIn('credentials', {
				redirect: false,
				email: data.email,
				password: data.password,
				callbackUrl,
			});

			if (result?.error) {
				setAuthError(result.error === 'CredentialsSignin' ? 'Email atau password salah.' : result.error);
				result?.url && router.push(result.url);
			} else if (result?.ok) {
				router.push(callbackUrl);
			}
		} catch (error) {
			console.error('Login error:', error);
			setAuthError('Terjadi kesalahan saat login.');
		}
	};

	return (
		<div className="flex min-h-screen items-center justify-center bg-background">
			<Card className="w-full max-w-xs sm:max-w-sm">
				<CardHeader>
					<CardTitle className="text-center text-2xl">Login</CardTitle>
				</CardHeader>
				<form onSubmit={handleSubmit(onSubmit)}>
					<CardContent className="space-y-6">
						<div className="grid gap-2">
							<Label htmlFor="email">Email</Label>
							<Input id="email" placeholder="m@example.com" {...register('email')} />
							{errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
						</div>
						<div className="grid gap-2">
							<Label htmlFor="password">Password</Label>
							<Input id="password" type="password" placeholder="••••••••" {...register('password')} />
							{errors.password && <p className="text-sm text-destructive">{errors.password.message}</p>}
						</div>
						{authError && <p className="text-sm text-destructive">{authError}</p>}
					</CardContent>
					<CardFooter>
						<Button type="submit" className="w-full" disabled={isSubmitting}>
							{isSubmitting ? (
								<>
									<IconLoader2 className="animate-spin" />
									Please wait
								</>
							) : (
								'Login'
							)}
						</Button>
					</CardFooter>
				</form>
			</Card>
		</div>
	);
}
