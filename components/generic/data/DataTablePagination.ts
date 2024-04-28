export type DataTablePagination = {
    pageCount: number;
    pageSize: number;
    pageIndex: number;
};

export function useTablePagination(
    emit: (evt: "paginationChange", pagination: DataTablePagination) => void,
    props: {
        data: { pages_count: number; page_number: number; page_size: number };
    }
) {
    const paginationState = reactive<DataTablePagination>({
        pageIndex: props?.data?.page_number ?? 0,
        pageCount: props?.data?.pages_count ?? 0,
        pageSize: props?.data?.page_size ?? 10,
    });

    const canGoForth = computed(() => {
        return paginationState.pageIndex < paginationState.pageCount - 1;
    });

    const canGoBack = computed(() => {
        return 0 < paginationState.pageIndex;
    });

    function goToNextPage() {
        if (canGoForth.value) {
            paginationState.pageIndex += 1;
            emitNewState();
        }
    }

    function goToPreviousPage() {
        if (canGoBack.value) {
            paginationState.pageIndex -= 1;
            emitNewState();
        }
    }

    function emitNewState() {
        emit("paginationChange", {
            pageIndex: paginationState.pageIndex,
            pageSize: paginationState.pageSize,
            pageCount: paginationState.pageCount,
        });
    }

    return {
        paginationState,
        goToPreviousPage,
        goToNextPage,
        canGoBack,
        canGoForth,
    };
}
