"use client";

import { useState } from "react";
import {
  useForm,
  type DefaultValues,
  type Resolver,
  type UseFormRegister,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { reservationFormSchema, type ReservationFormValues } from "@/lib/form-schema";

const defaultValues: DefaultValues<ReservationFormValues> = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  moveDate: "",
  preferredDeliveryDate: "",
  preferredPickupDate: "",
  currentAddress: "",
  newAddress: "",
  notes: "",
  realtorName: "",
  binCount: undefined,
};

function YesNoField({
  legend,
  name,
  error,
  register,
}: {
  legend: string;
  name: "dollyNeeded";
  error?: string;
  register: UseFormRegister<ReservationFormValues>;
}) {
  return (
    <fieldset className="space-y-2">
      <legend className="text-sm font-medium text-zinc-800">{legend}</legend>
      <div className="flex flex-wrap gap-4" role="radiogroup">
        <label className="flex min-h-[44px] cursor-pointer items-center gap-2 text-sm">
          <input
            type="radio"
            value="yes"
            className="h-4 w-4 accent-[var(--accent)]"
            {...register(name)}
          />
          Yes
        </label>
        <label className="flex min-h-[44px] cursor-pointer items-center gap-2 text-sm">
          <input
            type="radio"
            value="no"
            className="h-4 w-4 accent-[var(--accent)]"
            {...register(name)}
          />
          No
        </label>
      </div>
      {error && (
        <p className="text-sm text-red-600" role="alert">
          {error}
        </p>
      )}
    </fieldset>
  );
}

export function ReservationForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [banner, setBanner] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ReservationFormValues>({
    resolver: zodResolver(reservationFormSchema) as Resolver<ReservationFormValues>,
    defaultValues,
  });

  async function onSubmit(data: ReservationFormValues) {
    setStatus("idle");
    setBanner(null);
    try {
      const res = await fetch("/api/reserve", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          notes: data.notes ?? "",
        }),
      });
      const payload = (await res.json()) as {
        ok: boolean;
        message?: string;
        error?: string;
        fieldErrors?: Record<string, string>;
      };

      if (!res.ok || !payload.ok) {
        setStatus("error");
        setBanner(payload.error ?? "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      setBanner(payload.message ?? "Thanks — we received your request.");
      reset(defaultValues);
    } catch {
      setStatus("error");
      setBanner("Network error. Check your connection and try again.");
    }
  }

  const inputClass =
    "mt-1 w-full min-h-[44px] rounded-lg border border-zinc-300 bg-white px-3 py-2 text-base text-zinc-900 shadow-sm placeholder:text-zinc-400 focus:border-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/25";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
      {status === "success" && banner && (
        <div
          className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-900"
          role="status"
        >
          {banner}
        </div>
      )}
      {status === "error" && banner && (
        <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-900" role="alert">
          {banner}
        </div>
      )}

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="firstName" className="text-sm font-medium text-zinc-800">
            First name
          </label>
          <input
            id="firstName"
            autoComplete="given-name"
            aria-invalid={!!errors.firstName}
            className={inputClass}
            {...register("firstName")}
          />
          {errors.firstName && (
            <p className="mt-1 text-sm text-red-600">{errors.firstName.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="lastName" className="text-sm font-medium text-zinc-800">
            Last name
          </label>
          <input
            id="lastName"
            autoComplete="family-name"
            aria-invalid={!!errors.lastName}
            className={inputClass}
            {...register("lastName")}
          />
          {errors.lastName && (
            <p className="mt-1 text-sm text-red-600">{errors.lastName.message}</p>
          )}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="text-sm font-medium text-zinc-800">
            Email
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            aria-invalid={!!errors.email}
            className={inputClass}
            {...register("email")}
          />
          {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
        </div>
        <div>
          <label htmlFor="phone" className="text-sm font-medium text-zinc-800">
            Phone
          </label>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            aria-invalid={!!errors.phone}
            className={inputClass}
            {...register("phone")}
          />
          {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <div>
          <label htmlFor="moveDate" className="text-sm font-medium text-zinc-800">
            Move date
          </label>
          <input
            id="moveDate"
            type="date"
            required
            aria-invalid={!!errors.moveDate}
            className={inputClass}
            {...register("moveDate")}
          />
          {errors.moveDate && (
            <p className="mt-1 text-sm text-red-600">{errors.moveDate.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="preferredDeliveryDate" className="text-sm font-medium text-zinc-800">
            Preferred delivery
          </label>
          <input
            id="preferredDeliveryDate"
            type="date"
            required
            aria-invalid={!!errors.preferredDeliveryDate}
            className={inputClass}
            {...register("preferredDeliveryDate")}
          />
          {errors.preferredDeliveryDate && (
            <p className="mt-1 text-sm text-red-600">{errors.preferredDeliveryDate.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="preferredPickupDate" className="text-sm font-medium text-zinc-800">
            Preferred pickup
          </label>
          <input
            id="preferredPickupDate"
            type="date"
            required
            aria-invalid={!!errors.preferredPickupDate}
            className={inputClass}
            {...register("preferredPickupDate")}
          />
          {errors.preferredPickupDate && (
            <p className="mt-1 text-sm text-red-600">{errors.preferredPickupDate.message}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="currentAddress" className="text-sm font-medium text-zinc-800">
          Current address
        </label>
        <textarea
          id="currentAddress"
          rows={3}
          autoComplete="street-address"
          aria-invalid={!!errors.currentAddress}
          className={`${inputClass} min-h-[88px] resize-y`}
          {...register("currentAddress")}
        />
        {errors.currentAddress && (
          <p className="mt-1 text-sm text-red-600">{errors.currentAddress.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="newAddress" className="text-sm font-medium text-zinc-800">
          New address
        </label>
        <textarea
          id="newAddress"
          rows={3}
          autoComplete="off"
          aria-invalid={!!errors.newAddress}
          className={`${inputClass} min-h-[88px] resize-y`}
          {...register("newAddress")}
        />
        {errors.newAddress && (
          <p className="mt-1 text-sm text-red-600">{errors.newAddress.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="binCount" className="text-sm font-medium text-zinc-800">
          Number of bins needed
        </label>
        <input
          id="binCount"
          type="number"
          min={1}
          step={1}
          inputMode="numeric"
          aria-invalid={!!errors.binCount}
          className={inputClass}
          {...register("binCount")}
        />
        {errors.binCount && (
          <p className="mt-1 text-sm text-red-600">{errors.binCount.message}</p>
        )}
      </div>

      <div className="space-y-6">
        <YesNoField
          legend="Dolly needed?"
          name="dollyNeeded"
          error={errors.dollyNeeded?.message}
          register={register}
        />
        <div>
          <label htmlFor="realtorName" className="text-sm font-medium text-zinc-800">
            Realtor name <span className="font-normal text-zinc-500">(optional)</span>
          </label>
          <input
            id="realtorName"
            type="text"
            autoComplete="off"
            placeholder="If a realtor referred you, enter their name"
            aria-invalid={!!errors.realtorName}
            className={inputClass}
            {...register("realtorName")}
          />
          {errors.realtorName && (
            <p className="mt-1 text-sm text-red-600">{errors.realtorName.message}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="notes" className="text-sm font-medium text-zinc-800">
          Notes <span className="font-normal text-zinc-500">(optional)</span>
        </label>
        <textarea
          id="notes"
          rows={4}
          placeholder="Access codes, parking, special items…"
          className={`${inputClass} min-h-[100px] resize-y`}
          {...register("notes")}
        />
        {errors.notes && <p className="mt-1 text-sm text-red-600">{errors.notes.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex min-h-[48px] w-full items-center justify-center rounded-xl bg-[var(--accent)] px-6 text-base font-semibold text-white shadow-md transition hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:min-w-[200px]"
      >
        {isSubmitting ? "Sending…" : "Submit reservation"}
      </button>
    </form>
  );
}
