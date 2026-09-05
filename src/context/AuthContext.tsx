import { createContext, useContext, useState, ReactNode } from 'react';

export type UserRole = 'SUPER_ADMIN' | 'ADMIN' | 'EDITOR' | 'AUTHOR' | 'CONTRIBUTOR';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  mustChangePassword?: boolean;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  signIn: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  signOut: () => void;
  changePassword: (newPassword: string) => void;
}

const AuthContext = createContext<AuthState | null>(null);

// Mock user store (in production this would be a real backend)
const MOCK_USERS: (User & { password: string })[] = [
  {
    id: 'u1',
    name: 'Lambert Admin',
    email: 'lambert2@gmail.com',
    password: 'Lambert',
    role: 'SUPER_ADMIN',
    mustChangePassword: true
  },
  {
    id: 'u2',
    name: 'Jean-Baptiste Nzeyimana',
    email: 'jb@techlearn.rw',
    password: 'editor2024',
    role: 'EDITOR'
  },
  {
    id: 'u3',
    name: 'Amina Contributor',
    email: 'amina@techlearn.rw',
    password: 'contrib2024',
    role: 'CONTRIBUTOR'
  }
];

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(() => {
    const stored = sessionStorage.getItem('tlr_user');
    return stored ? JSON.parse(stored) : null;
  });

  const signIn = async (email: string, password: string) => {
    await new Promise(r => setTimeout(r, 600));
    const found = MOCK_USERS.find(u => u.email === email && u.password === password);
    if (!found) return { success: false, error: 'Invalid email or password.' };
    const { password: _, ...userData } = found;
    setUser(userData);
    sessionStorage.setItem('tlr_user', JSON.stringify(userData));
    return { success: true };
  };

  const signOut = () => {
    setUser(null);
    sessionStorage.removeItem('tlr_user');
  };

  const changePassword = (newPassword: string) => {
    if (!user) return;
    const updated = { ...user, mustChangePassword: false };
    setUser(updated);
    sessionStorage.setItem('tlr_user', JSON.stringify(updated));
    // In production: call API to hash and store new password
    console.info('Password change would be sent to backend for secure hashing');
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, signIn, signOut, changePassword }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}

export function canAccess(user: User | null, minRole: UserRole): boolean {
  if (!user) return false;
  const hierarchy: UserRole[] = ['CONTRIBUTOR', 'AUTHOR', 'EDITOR', 'ADMIN', 'SUPER_ADMIN'];
  return hierarchy.indexOf(user.role) >= hierarchy.indexOf(minRole);
}
