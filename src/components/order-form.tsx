"use client";

import { useState } from "react";

const defaultState = {
  drink: "Maple Cinnamon Latte",
  pastry: "Butter Croissant",
  pickupTime: "Tomorrow • 8:15am",
  name: "",
  notes: "",
};

export function OrderForm() {
  const [formState, setFormState] = useState(defaultState);
  const [submitted, setSubmitted] = useState(false);

  function updateField<Key extends keyof typeof defaultState>(
    key: Key,
    value: (typeof defaultState)[Key],
  ) {
    setFormState((current) => ({
      ...current,
      [key]: value,
    }));
  }

  return (
    <div className="formCard">
      <div className="formCopy">
        <p className="sectionEyebrow">Pickup order</p>
        <h2 className="sectionTitle">Order ahead for a smooth morning.</h2>
        <p className="sectionText">
          Choose your drink, select a pickup window, and we&apos;ll have it ready
          at the bar.
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
          <span>Drink</span>
          <select
            onChange={(event) => updateField("drink", event.target.value)}
            value={formState.drink}
          >
            <option>Maple Cinnamon Latte</option>
            <option>Iced Honey Oat Latte</option>
            <option>House Drip</option>
            <option>Cappuccino</option>
          </select>
        </label>

        <label className="formField">
          <span>Pastry</span>
          <select
            onChange={(event) => updateField("pastry", event.target.value)}
            value={formState.pastry}
          >
            <option>Butter Croissant</option>
            <option>Blueberry Scone</option>
            <option>Chocolate Chunk Cookie</option>
            <option>No pastry</option>
          </select>
        </label>

        <label className="formField">
          <span>Pickup window</span>
          <select
            onChange={(event) => updateField("pickupTime", event.target.value)}
            value={formState.pickupTime}
          >
            <option>Tomorrow • 8:15am</option>
            <option>Tomorrow • 8:30am</option>
            <option>Tomorrow • 9:00am</option>
            <option>Today • 4:45pm</option>
          </select>
        </label>

        <label className="formField">
          <span>Name</span>
          <input
            onChange={(event) => updateField("name", event.target.value)}
            placeholder="Your name"
            type="text"
            value={formState.name}
          />
        </label>

        <label className="formField formFieldWide">
          <span>Notes</span>
          <textarea
            onChange={(event) => updateField("notes", event.target.value)}
            placeholder="Extra oat milk, no cinnamon, pickup for a friend..."
            rows={4}
            value={formState.notes}
          />
        </label>

        <button className="buttonLink buttonsolid formSubmit" type="submit">
          <span>Place pickup order</span>
        </button>
      </form>

      {submitted ? (
        <div className="formNotice">
          <strong>Pickup request confirmed.</strong>
          <p>
            We&apos;ve prepared {formState.drink} and {formState.pastry.toLowerCase()}
            for {formState.pickupTime}. We&apos;ll hold it under{" "}
            {formState.name || "your name"}.
          </p>
        </div>
      ) : null}
    </div>
  );
}
