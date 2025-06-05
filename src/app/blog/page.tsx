'use client';

import { Button } from '@/components/ui/button';
import { signOut, useSession } from 'next-auth/react';
import React from 'react';

export default function page() {
	const { data } = useSession();
	console.log(data);
	return (
		<div>
			<Button onClick={() => signOut()}>Logout</Button>
		</div>
	);
}
