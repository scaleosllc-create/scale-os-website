"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { FormData, FormErrors, validateForm } from "@/lib/validation";
import { revenueOptions, serviceOptions, referralOptions } from "@/lib/constants";

export default function ApplyForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    business: "",
    shopifyUrl: "",
    revenue: "",
    services: [],
    challenge: "",
    referral: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [e.target.name]: undefined }));
    }
  };

  const toggleService = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
    if (errors.services) {
      setErrors((prev) => ({ ...prev, services: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="text-center py-16">
        <h2 className="text-3xl md:text-4xl tracking-tighter leading-none font-serif font-light text-ink mb-4">
          Application received.
        </h2>
        <p className="text-gray-500 mb-6">
          We&apos;ll be in touch within 48 hours.
        </p>
        <Button href="/" variant="primary">
          Back to Home
        </Button>
      </div>
    );
  }

  const inputClass =
    "w-full rounded-xl px-4 py-3 text-sm text-ink placeholder:text-gray-300 ring-1 ring-ink/[0.06] focus:outline-none focus:ring-forest focus:ring-2 transition-all duration-300 bg-white";

  return (
    <form onSubmit={handleSubmit} noValidate>
      {status === "error" && (
        <div className="bg-red-50 ring-1 ring-red-200 text-error text-sm rounded-xl px-4 py-3 mb-6">
          Something went wrong. Please try again.
        </div>
      )}

      {/* Row 1 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
        <div>
          <label htmlFor="name" className="block text-xs font-semibold text-gray-700 tracking-wide mb-1.5">
            YOUR NAME *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Full name"
            value={formData.name}
            onChange={handleChange}
            className={inputClass}
          />
          {errors.name && <p className="text-error text-xs mt-1">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email" className="block text-xs font-semibold text-gray-700 tracking-wide mb-1.5">
            EMAIL ADDRESS *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@company.com"
            value={formData.email}
            onChange={handleChange}
            className={inputClass}
          />
          {errors.email && <p className="text-error text-xs mt-1">{errors.email}</p>}
        </div>
      </div>

      {/* Row 2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
        <div>
          <label htmlFor="business" className="block text-xs font-semibold text-gray-700 tracking-wide mb-1.5">
            BUSINESS NAME *
          </label>
          <input
            id="business"
            name="business"
            type="text"
            placeholder="Your brand name"
            value={formData.business}
            onChange={handleChange}
            className={inputClass}
          />
          {errors.business && <p className="text-error text-xs mt-1">{errors.business}</p>}
        </div>
        <div>
          <label htmlFor="shopifyUrl" className="block text-xs font-semibold text-gray-700 tracking-wide mb-1.5">
            SHOPIFY STORE URL *
          </label>
          <input
            id="shopifyUrl"
            name="shopifyUrl"
            type="url"
            placeholder="https://yourstore.com"
            value={formData.shopifyUrl}
            onChange={handleChange}
            className={inputClass}
          />
          {errors.shopifyUrl && <p className="text-error text-xs mt-1">{errors.shopifyUrl}</p>}
        </div>
      </div>

      {/* Row 3: Revenue */}
      <div className="mb-5">
        <label htmlFor="revenue" className="block text-xs font-semibold text-gray-700 tracking-wide mb-1.5">
          MONTHLY REVENUE *
        </label>
        <select
          id="revenue"
          name="revenue"
          value={formData.revenue}
          onChange={handleChange}
          className={`${inputClass} appearance-none`}
        >
          <option value="">Select a range</option>
          {revenueOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        {errors.revenue && <p className="text-error text-xs mt-1">{errors.revenue}</p>}
      </div>

      {/* Row 4: Services */}
      <div className="mb-5">
        <label className="block text-xs font-semibold text-gray-700 tracking-wide mb-1.5">
          WHAT ARE YOU LOOKING FOR? *
        </label>
        <div className="flex flex-wrap gap-2">
          {serviceOptions.map((service) => {
            const selected = formData.services.includes(service);
            return (
              <motion.button
                key={service}
                type="button"
                layout
                whileTap={{ scale: 0.95 }}
                onClick={() => toggleService(service)}
                className={`rounded-full px-4 py-2 text-[13px] ring-1 transition-all duration-300 ${
                  selected
                    ? "ring-forest bg-forest/[0.06] text-forest"
                    : "ring-ink/[0.06] bg-white text-gray-700 hover:ring-ink/[0.15]"
                }`}
              >
                {service}
              </motion.button>
            );
          })}
        </div>
        {errors.services && <p className="text-error text-xs mt-1">{errors.services}</p>}
      </div>

      {/* Row 5: Challenge */}
      <div className="mb-5">
        <label htmlFor="challenge" className="block text-xs font-semibold text-gray-700 tracking-wide mb-1.5">
          WHAT&apos;S YOUR BIGGEST GROWTH CHALLENGE RIGHT NOW? *
        </label>
        <textarea
          id="challenge"
          name="challenge"
          rows={4}
          placeholder="Tell us what's holding your brand back..."
          value={formData.challenge}
          onChange={handleChange}
          className={`${inputClass} resize-none`}
        />
        {errors.challenge && <p className="text-error text-xs mt-1">{errors.challenge}</p>}
      </div>

      {/* Row 6: Referral */}
      <div className="mb-10">
        <label htmlFor="referral" className="block text-xs font-semibold text-gray-700 tracking-wide mb-1.5">
          HOW DID YOU HEAR ABOUT US?
        </label>
        <select
          id="referral"
          name="referral"
          value={formData.referral}
          onChange={handleChange}
          className={`${inputClass} appearance-none`}
        >
          <option value="">Select one (optional)</option>
          {referralOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      {/* Submit */}
      <div className="text-center">
        <Button
          type="submit"
          variant="primary"
          disabled={status === "submitting"}
          className="min-w-[200px]"
          arrow
        >
          {status === "submitting" ? "SUBMITTING..." : "SUBMIT APPLICATION"}
        </Button>
        <p className="text-[11px] text-gray-300 mt-4">
          We&apos;ll review your application and respond within 48 hours.
        </p>
      </div>
    </form>
  );
}
