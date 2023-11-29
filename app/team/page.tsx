"use client";
import { SWRConfig } from "swr";
import Team from "./departments";
import { fetcher } from "../../lib/fetcher";

export default function Page() {
  return (
    <SWRConfig value={{ fetcher }}>
      <Team />
    </SWRConfig>
  );
}
