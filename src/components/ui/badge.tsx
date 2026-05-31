'use client';

type Props = {
  children: React.ReactNode;
  type?: 'success' | 'warning' | 'danger' | 'default';
};

export function Badge({
  children,
  type = 'default',
}: Props) {
  const styles = {
    success: 'bg-green-100 text-green-700',
    warning: 'bg-yellow-100 text-yellow-700',
    danger: 'bg-red-100 text-red-700',
    default: 'bg-gray-100 text-gray-700',
  };

  return (
    <span className={`px-2 py-1 text-xs rounded ${styles[type]}`}>
      {children}
    </span>
  );
}