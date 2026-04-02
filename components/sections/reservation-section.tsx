import { reservation } from "@/content/site";
import { ReservationForm } from "@/components/reservation-form";

export function ReservationSection() {
  return (
    <section
      id="reserve"
      className="scroll-mt-24 border-t border-zinc-100 bg-white px-4 py-16 sm:px-6 sm:py-20"
      aria-labelledby="reserve-heading"
    >
      <div className="mx-auto max-w-2xl">
        <h2 id="reserve-heading" className="text-3xl font-bold tracking-tight text-zinc-900">
          {reservation.title}
        </h2>
        <p className="mt-2 text-zinc-600">{reservation.subtitle}</p>
        <div className="mt-10">
          <ReservationForm />
        </div>
      </div>
    </section>
  );
}
