import LoginForm from "./LoginForm";

export default function page() {
  return (
    <div className="p-4 rounded lg:py-12 shadow-xl lg:mx-24 bg-main gap-2 border border-gray-800 flex flex-col text-main">
      <h1 className="text-blue-800 lg:text-3xl font-semibold font-serif">
        Log in
      </h1>
      <LoginForm />
    </div>
  );
}
