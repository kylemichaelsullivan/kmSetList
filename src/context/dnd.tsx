import type { ReactNode } from 'react';
import { DndContext } from '@dnd-kit/core';
import { closestViewport } from '@dnd-kit/modifiers';
import { useSortableHandle } from '@dnd-kit/sortable';

type DndProviderProps = {
  children: ReactNode;
};

export function DndProvider({ children }: DndProviderProps) {
  return <DndContext dragDrop={closestViewport}>{children}</DndContext>;
}
