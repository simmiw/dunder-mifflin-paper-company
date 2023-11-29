"use client";
import { SWRConfig } from "swr";
import TeamDetails from "./TeamDetails";
import { fetcher } from "../../../lib/fetcher";

export default function Page({ params }: { params: { team: string } }) {
  return (
    <SWRConfig value={{ fetcher }}>
      <TeamDetails team={params.team} />
    </SWRConfig>
  );
}
