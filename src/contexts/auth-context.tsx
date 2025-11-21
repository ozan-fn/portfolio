import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface User {
	id: string;
	email: string;
	name?: string;
}

interface AuthContextType {
	user: User | null;
	token: string | null;
	loading: boolean;
	login: (email: string, password: string) => Promise<void>;
	logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
	const [user, setUser] = useState<User | null>(null);
	const [token, setToken] = useState<string | null>(null);
	const [loading, setLoading] = useState(true);
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
		const savedUser = localStorage.getItem("auth-user");
		const savedToken = localStorage.getItem("auth-token");
		if (savedUser && savedToken) {
			setUser(JSON.parse(savedUser));
			setToken(savedToken);
		}
		setLoading(false);
	}, []);

	const login = async (email: string, password: string) => {
		setLoading(true);
		try {
			const response = await fetch("/api/auth/login", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ email, password }),
			});
			const data = await response.json();
			if (data.success) {
				setUser(data.user);
				setToken(data.token);
				localStorage.setItem("auth-user", JSON.stringify(data.user));
				localStorage.setItem("auth-token", data.token);
			} else {
				throw new Error(data.message || "Login failed");
			}
		} catch (error) {
			console.error("Login error:", error);
			throw error;
		} finally {
			setLoading(false);
		}
	};

	const logout = () => {
		setUser(null);
		setToken(null);
		localStorage.removeItem("auth-user");
		localStorage.removeItem("auth-token");
		fetch("/api/auth/logout", { method: "POST" }).catch(console.error);
	};

	if (!mounted) return null;

	return <AuthContext.Provider value={{ user, token, loading, login, logout }}>{children}</AuthContext.Provider>;
}

export function useAuth() {
	const context = useContext(AuthContext);
	if (context === undefined) {
		throw new Error("useAuth must be used within an AuthProvider");
	}
	return context;
}
