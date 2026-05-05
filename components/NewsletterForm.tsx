"use client";
export default function NewsletterForm() {
  return (
    <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
      <input type="email" placeholder="your@email.com" className="flex-1 px-4 py-2.5 rounded-lg text-gray-900 text-sm focus:outline-none" />
      <button type="submit" className="btn-primary text-sm whitespace-nowrap">Subscribe Free</button>
    </form>
  );
}
