import { useIsFetching } from '@tanstack/react-query'
import React from 'react'
import TopBarProgress from 'react-topbar-progress-indicator';

const Loader: React.FC = () => {
    const isFetching = useIsFetching();
    if (isFetching) return <TopBarProgress />

}

export default Loader