'use client';

import { InputHTMLAttributes } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

export function Input(props: Props) {
  return (
    <input
      {...props}
      className="w-full rounded-md border px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
}