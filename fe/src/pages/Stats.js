import React, { useEffect } from "react";
import { ChartsContainer, StatsContainer } from "../components";
import Loading from "../components/Loading";
import { useAppContext } from "../context/appContext";

export default function Stats() {
  const { showStats, isLoading, monthlyApplications } = useAppContext();
  useEffect(() => {
    showStats();
  }, []);

  if (isLoading) {
    return <Loading center />;
  }

  return (
    <>
      <StatsContainer />
      {monthlyApplications.length > 0 && <ChartsContainer />}
    </>
  );
}
