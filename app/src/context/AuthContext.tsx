import { onAuthStateChanged } from "firebase/auth";
import { createContext, ReactNode, useEffect, useState } from "react";
import { User } from "firebase/auth";
import { getAuth } from "firebase/auth";

interface AuthContextProps {
  user: User | null;
  loading: boolean;
}

interface AuthProviderProps {
  children: ReactNode;
}

const auth = getAuth();

export const AuthContext = createContext<AuthContextProps>({
  user: null,
  loading: true,
});

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    return onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        const token = await currentUser.getIdToken();
        document.cookie = `token=${token}; path=/`;
        setUser(currentUser);
      } else {
        setUser(null);
      }
      setLoading(false);
    });
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
