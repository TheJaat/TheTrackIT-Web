'use client';

import { useState } from 'react';

import { allocateDevice } from '@/lib/allocation-api';
import { useUsers } from '@/hooks/use-users';

interface Props {
  deviceId: string;
}

export function AllocateDevice({
  deviceId,
}: Props) {
  const { data } = useUsers();

  const [userId, setUserId] =
    useState('');

  async function handleAllocate() {
    await allocateDevice(
      deviceId,
      userId,
    );

    window.location.reload();
  }

  return (
    <div>
      <select
        value={userId}
        onChange={(e) =>
          setUserId(e.target.value)
        }
      >
        <option value="">
          Select User
        </option>

        {data?.map((user: any) => (
          <option
            key={user.id}
            value={user.id}
          >
            {user.name}
          </option>
        ))}
      </select>

      <button
        onClick={handleAllocate}
      >
        Allocate
      </button>
    </div>
  );
}