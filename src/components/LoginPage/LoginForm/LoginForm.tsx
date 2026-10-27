import { useState, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import FormError from "../../SharedComponents/ErrorMessage/ErrorMessage";
import SharedButton from "../../SharedComponents/SharedButtons/SharedButtons";

const REMEMBER_KEY = "fastgate_admin_username";

type LoginErrors = {
  username?: string;
  password?: string;
};

function EyeIcon({ off }: { off: boolean }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12Z" />
      <circle cx="12" cy="12" r="3" />
      {off && <path d="M4 4l16 16" />}
    </svg>
  );
}

export default function LoginForm() {
  const navigate = useNavigate();

  const [username, setUsername] = useState(
    () => localStorage.getItem(REMEMBER_KEY) ?? "",
  );
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(
    () => localStorage.getItem(REMEMBER_KEY) !== null,
  );
  const [errors, setErrors] = useState<LoginErrors>({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");

    const newErrors: LoginErrors = {};
    if (!username.trim()) newErrors.username = "Please enter your username.";
    if (!password) newErrors.password = "Please enter your password.";

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setLoading(true);
    try {
      if (remember) localStorage.setItem(REMEMBER_KEY, username.trim());
      else localStorage.removeItem(REMEMBER_KEY);

      navigate("/admin"); // TODO: صفحة الأدمن بعد الدخول
    } catch {
      setError("Username or password is incorrect.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={styles.wrapper} aria-labelledby="login-title">
      <h1 id="login-title" className={styles.title}>
        Welcome Back
      </h1>
      <p className={styles.subtitle}>Login to your admin account</p>

      <form onSubmit={handleSubmit} noValidate className={styles.form}>
        <div className={styles.field}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
              setErrors((prev) => ({ ...prev, username: undefined }));
              setError("");
            }}
            autoComplete="username"
            autoFocus
            className={errors.username ? styles.invalid : ""}
            aria-invalid={!!errors.username}
          />
          <FormError message={errors.username} />
        </div>

        <div className={styles.field}>
          <label htmlFor="password">Password</label>
          <div className={styles.passwordRow}>
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setErrors((prev) => ({ ...prev, password: undefined }));
                setError("");
              }}
              autoComplete="current-password"
              className={errors.password ? styles.invalid : ""}
              aria-invalid={!!errors.password}
            />
            <button
              type="button"
              className={styles.toggle}
              onClick={() => setShowPassword((v) => !v)}
              aria-label={showPassword ? "Hide password" : "Show password"}
              aria-pressed={showPassword}
            >
              <EyeIcon off={showPassword} />
            </button>
          </div>
          <FormError message={errors.password} />
        </div>

        <div className={styles.options}>
          <label className={styles.remember}>
            <input
              type="checkbox"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
            />
            Remember me
          </label>
          <Link to="/forgot-password" className={styles.link}>
            Forgot Password?
          </Link>
        </div>

        {error && (
          <p role="alert" className={styles.error}>
            {error}
          </p>
        )}

        <SharedButton
          label={loading ? "Signing in…" : "Login"}
          variant="primarybutton"
          type="submit"
          disabled={loading}
          className={styles.fullWidth}
        />
      </form>

      <p className={styles.footer}>
        <Link to="/" className={styles.link}>
          Back to home page
        </Link>
      </p>
    </section>
  );
}
