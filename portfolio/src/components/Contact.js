import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      alert("Message sent! (Not really though!!)");
      setFormData({ name: "", email: "", message: "" });
    } else {
      alert("Please fill in all fields");
    }
  };

  return (
    <div
      id="Contact"
      className="min-h-screen bg-gradient-to-br from-zinc-950 via-stone-500 to-zinc-900 text-white"
    >
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Get In Touch
          </h1>

          <div className="bg-slate-900/50 p-8 rounded-xl border border-blue-900/30">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-cyan-400 mb-2 font-semibold">
                  Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full bg-slate-800 border border-blue-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-cyan-400 mb-2 font-semibold">
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full bg-slate-800 border border-blue-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-cyan-400 mb-2 font-semibold">
                  Message
                </label>
                <textarea
                  rows={6}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full bg-slate-800 border border-blue-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-300 mb-4">Or reach out directly:</p>
            <div className="flex justify-center gap-6">
              <a
                href="mailto:essanchez02@gmail.com"
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                essanchez02@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
