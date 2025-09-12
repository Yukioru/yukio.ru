'use client';

import { PropsWithChildren } from "react";
import Card from "./Card";

export default function GradientCard({ children }: PropsWithChildren) {
  return (
    <div className="relative max-w-96 mx-auto">
      <div className="absolute inset-0 rounded-3xl p-px gradient-border" />
      <div className="relative m-px">
        <Card className="border-none flex flex-col gap-10">
          {children}
        </Card>
      </div>
    </div>
  );
}
