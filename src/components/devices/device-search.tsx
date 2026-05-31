'use client';

interface Props {
  value: string;
  onChange: (v: string) => void;
}

export function DeviceSearch({
  value,
  onChange,
}: Props) {
  return (
    <input
      placeholder="Search device..."
      value={value}
      onChange={(e) =>
        onChange(e.target.value)
      }
    />
  );
}