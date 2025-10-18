import {
  Pagination as ShadPagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
} from '@/components/ui/pagination';
import { useReducer, ReactNode } from 'react';

type PaginationState = { page: number; size: number };
type PaginationAction =
  | { type: 'NEXT'; total: number }
  | { type: 'PREV' }
  | { type: 'GOTO'; page: number }
  | { type: 'RESET' };

function paginationReducer(
  state: PaginationState,
  action: PaginationAction
): PaginationState {
  switch (action.type) {
    case 'NEXT':
      return {
        ...state,
        page: Math.min(
          state.page + 1,
          Math.ceil(action.total / state.size) - 1
        ),
      };
    case 'PREV':
      return {
        ...state,
        page: Math.max(state.page - 1, 0),
      };
    case 'GOTO':
      return {
        ...state,
        page: action.page,
      };
    case 'RESET':
      return { page: 0, size: state.size };
    default:
      return state;
  }
}

export default function Pagination<T>({
  data,
  size = 3,
  children,
}: {
  data: T[];
  size?: number;
  children: (paginatedData: T[]) => ReactNode;
}) {
  const [pagination, dispatch] = useReducer(paginationReducer, {
    page: 0,
    size,
  });

  const totalPages = Math.ceil(data.length / pagination.size);
  const paginatedData = data.slice(
    pagination.page * pagination.size,
    (pagination.page + 1) * pagination.size
  );

  return (
    <div className="relative w-full">
      <div>{children(paginatedData)}</div>

      <ShadPagination className="mt-4 flex justify-end pr-4">
        <PaginationContent className="flex items-center gap-1 text-white">
          {pagination.page > 0 && (
            <PaginationItem className="cursor-pointer">
              <PaginationPrevious onClick={() => dispatch({ type: 'PREV' })} />
            </PaginationItem>
          )}

          {Array.from({ length: totalPages }).map((_, index) => (
            <PaginationItem key={index}>
              <button
                onClick={() => dispatch({ type: 'GOTO', page: index })}
                className={`cursor-pointer rounded-md px-3 py-1 ${
                  pagination.page === index
                    ? 'bg-white font-bold text-black'
                    : 'bg-transparent hover:bg-white/20'
                }`}
              >
                {index + 1}
              </button>
            </PaginationItem>
          ))}

          {pagination.page < totalPages - 1 && (
            <PaginationItem className="cursor-pointer">
              <PaginationNext
                onClick={() => dispatch({ type: 'NEXT', total: data.length })}
              />
            </PaginationItem>
          )}
        </PaginationContent>
      </ShadPagination>
    </div>
  );
}
