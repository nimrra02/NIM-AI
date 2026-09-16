'use client';

import { createContext, useContext, useState, useEffect, useCallback } from 'react';

// ── Hardcoded credentials ─────────────────────────────────────
// Change these before going to production or wire up a real backend.
const USERS = [
  {
    id: '1',
    name: 'Admin',
    email: 'admin@nimlab.ai',
    password: 'admin123',
    role: 'admin',
  },
  {
    id: '2',
    name: 'User',
    email: 'user@nimlab.ai',
    password: 'user123',
    role: 'user',
  },
];

const SESSION_KEY    = 'nimai_session';
const SESSION_COOKIE = 'nimai_role'; // read by middleware (Edge-safe, not HttpOnly)

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  // Restore session from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(SESSION_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        setSession(parsed);
        // Re-sync cookie in case it was lost (e.g. browser restart)
        document.cookie = `${SESSION_COOKIE}=${parsed.role}; path=/; SameSite=Lax`;
      }
    } catch (_) {
      // corrupted storage — ignore
    }
    setLoading(false);
  }, []);

  const login = useCallback(({ email, password }) => {
    const match = USERS.find(
      (u) => u.email === email.trim().toLowerCase() && u.password === password
    );
    if (!match) return { success: false, error: 'Invalid email or password.' };

    const { password: _pw, ...safe } = match;
    localStorage.setItem(SESSION_KEY, JSON.stringify(safe));
    document.cookie = `${SESSION_COOKIE}=${safe.role}; path=/; SameSite=Lax`;
    setSession(safe);
    return { success: true, role: safe.role };
  }, []);

  // logout only clears state — callers handle redirect themselves
  const logout = useCallback(() => {
    localStorage.removeItem(SESSION_KEY);
    document.cookie = `${SESSION_COOKIE}=; path=/; max-age=0`;
    setSession(null);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        session,
        loading,
        login,
        logout,
        isAdmin: session?.role === 'admin',
        isUser:  session?.role === 'user',
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used inside <AuthProvider>');
  return ctx;
}
