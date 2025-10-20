import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Eye, EyeOff } from 'lucide-react';
import styles from './LoginPage.module.css';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(); // Just login instantly for hackathon demo
  };

  return (
    <div className={styles.container}>
      <div className={styles.loginCard}>
        <div className="text-center">
          <div className="flex justify-center">
            <div className="p-3">
              <img
                src="/logo.png"
                alt="Queryous Minds Logo"
                className="h-40 w-40 object-contain"
              />
            </div>
          </div>
          <h2 className={styles.title}>
            Queryous Minds
          </h2>
          <p className={styles.subtitle}>
            AI-Powered Investigation Assistant
          </p>
        </div>

          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className={styles.inputLabel}>
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={styles.inputField}
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label htmlFor="password" className={styles.inputLabel}>
                Password
              </label>
              <div className={styles.passwordContainer}>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={styles.inputField}
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  className={styles.passwordToggle}
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className={styles.primaryButton}
            >
              Sign in
            </button>
          </div>

          <div className={styles.demoCredentials}>
            <p>
              Demo credentials: Use any email and password
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
