"use client";

import { Fragment } from "react";
import { motion } from "framer-motion";

type Props<T> = {
  items: T[];
  getKey: (item: T) => string;
  renderItem: (item: T) => React.ReactNode;
  loading?: boolean;
  gap?: boolean;
};

function EntityGrid<T>({ items, getKey, renderItem, loading = false, gap = true }: Props<T>) {
  if (loading)
    return (
      <div className="text-center min-h-screen text-2xl font-bold">
        Loading...
      </div>
    );

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div
        className={`flex flex-wrap justify-center items-center pb-5 min-h-screen ${
          gap ? "gap-4" : ""
        }`}
      >
        {items.map((item) => (
          <Fragment key={getKey(item)}>{renderItem(item)}</Fragment>
        ))}
      </div>
    </motion.div>
  );
}

export default EntityGrid;
