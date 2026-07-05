export default function Contact() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <span className="eyebrow" style={{ color: "var(--brass-dark)" }}>Contact</span>
      <h1 className="font-display text-4xl mt-3 mb-10">Let's talk</h1>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div>
            <h3 className="eyebrow opacity-50 mb-2">Company</h3>
            <p className="font-display text-xl">Aurel Beauty Distribution</p>
            <p className="opacity-70 text-sm">Chișinău, Republic of Moldova</p>
          </div>
          <div>
            <h3 className="eyebrow opacity-50 mb-2">Email</h3>
            <a href="mailto:office@aurelbeauty.com" className="font-display text-xl hover:opacity-70">
              office@aurelbeauty.com
            </a>
          </div>
          <div>
            <h3 className="eyebrow opacity-50 mb-2">Phone</h3>
            <a href="tel:+37300000000" className="font-display text-xl hover:opacity-70">
              +373 00 000 000
            </a>
          </div>
          <p className="text-xs opacity-50 pt-4">
            Editable — replace with real company details in src/pages/Contact.jsx
          </p>
        </div>

        <form
          className="space-y-4 p-8 rounded-sm border"
          style={{ borderColor: "var(--line)", background: "var(--paper-raised)" }}
          onSubmit={(e) => {
            e.preventDefault();
            const data = new FormData(e.target);
            const subject = encodeURIComponent(`Inquiry from ${data.get("name")}`);
            const body = encodeURIComponent(
              `${data.get("message")}\n\n— ${data.get("name")}, ${data.get("email")}`
            );
            window.location.href = `mailto:office@aurelbeauty.com?subject=${subject}&body=${body}`;
          }}
        >
          <Field label="Name" name="name" type="text" required />
          <Field label="Email" name="email" type="email" required />
          <Field label="Company (optional)" name="company" type="text" />
          <div>
            <label className="eyebrow opacity-60 block mb-2" htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="w-full border rounded-sm px-4 py-3 bg-transparent"
              style={{ borderColor: "var(--line)" }}
            />
          </div>
          <button
            type="submit"
            className="eyebrow px-7 py-4 rounded-full"
            style={{ background: "var(--ink)", color: "var(--paper)" }}
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({ label, name, type, required }) {
  return (
    <div>
      <label className="eyebrow opacity-60 block mb-2" htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full border rounded-sm px-4 py-3 bg-transparent"
        style={{ borderColor: "var(--line)" }}
      />
    </div>
  );
}
