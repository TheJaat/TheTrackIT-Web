export default function LoginPage() {
  return (
    <div className="flex h-screen items-center justify-center">
      <form className="w-96 space-y-4">
        <input
          placeholder="Email"
          className="w-full border p-2"
        />

        <input
          placeholder="Password"
          type="password"
          className="w-full border p-2"
        />

        <button>
          Login
        </button>
      </form>
    </div>
  );
}