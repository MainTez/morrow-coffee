"use client";

import { useState } from "react";

const baseReservation = {
  name: "",
  guests: "2 guests",
  visitDate: "Next Saturday",
  time: "10:30am",
  event: "",
  notes: "",
};

type ReserveFormProps = {
  initialEvent?: string;
};

export function ReserveForm({ initialEvent = "" }: ReserveFormProps) {
  const [reservation, setReservation] = useState({
    ...baseReservation,
    event: initialEvent,
  });
  const [submitted, setSubmitted] = useState(false);

  function updateField<Key extends keyof typeof baseReservation>(
    key: Key,
    value: (typeof baseReservation)[Key],
  ) {
    setReservation((current) => ({
      ...current,
      [key]: value,
    }));
  }

  return (
    <div className="formCard">
      <div className="formCopy">
        <p className="sectionEyebrow">Table request</p>
        <h2 className="sectionTitle">Reserve a table or save a spot.</h2>
        <p className="sectionText">
          Morning meeting, weekend catch-up, or one of our cafe events. Pick a
          time and we&apos;ll follow up with a confirmation.
        </p>
      </div>

      <form
        className="stackedForm"
        onSubmit={(event) => {
          event.preventDefault();
          setSubmitted(true);
        }}
      >
        <label className="formField">
          <span>Name</span>
          <input
            onChange={(event) => updateField("name", event.target.value)}
            placeholder="Your name"
            type="text"
            value={reservation.name}
          />
        </label>

        <label className="formField">
          <span>Party size</span>
          <select
            onChange={(event) => updateField("guests", event.target.value)}
            value={reservation.guests}
          >
            <option>1 guest</option>
            <option>2 guests</option>
            <option>4 guests</option>
            <option>6 guests</option>
          </select>
        </label>

        <label className="formField">
          <span>Date</span>
          <select
            onChange={(event) => updateField("visitDate", event.target.value)}
            value={reservation.visitDate}
          >
            <option>Next Saturday</option>
            <option>Next Sunday</option>
            <option>Tomorrow</option>
            <option>Friday evening</option>
          </select>
        </label>

        <label className="formField">
          <span>Time</span>
          <select
            onChange={(event) => updateField("time", event.target.value)}
            value={reservation.time}
          >
            <option>8:00am</option>
            <option>10:30am</option>
            <option>1:00pm</option>
            <option>5:30pm</option>
          </select>
        </label>

        <label className="formField">
          <span>Event</span>
          <select
            onChange={(event) => updateField("event", event.target.value)}
            value={reservation.event}
          >
            <option value="">No event, just a table</option>
            <option>Latte Art Workshop</option>
            <option>Brewing Better at Home</option>
            <option>Morning Pages</option>
          </select>
        </label>

        <label className="formField formFieldWide">
          <span>Notes</span>
          <textarea
            onChange={(event) => updateField("notes", event.target.value)}
            placeholder="Window seat, stroller space, questions about the event..."
            rows={4}
            value={reservation.notes}
          />
        </label>

        <button className="buttonLink buttonsolid formSubmit" type="submit">
          <span>Send reservation request</span>
        </button>
      </form>

      {submitted ? (
        <div className="formNotice">
          <strong>Reservation request received.</strong>
          <p>
            We&apos;ll hold space for {reservation.guests.toLowerCase()} on{" "}
            {reservation.visitDate} at {reservation.time}
            {reservation.event
              ? ` for ${reservation.event}.`
              : "."}
          </p>
        </div>
      ) : null}
    </div>
  );
}
