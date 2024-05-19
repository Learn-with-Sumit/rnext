"use client"
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const ActiveFilters = ({filter}) => {
  return (
    <div className="flex items-center gap-2 flex-wrap">
        {/* active categories */}
        {filter.categories.length > 0 &&
          filter.categories.map((category) => (
            <Button
              key={category}
              variant="ghost"
              className="text-xs h-7 bg-muted rounded-full gap-1 text-sky-700"
              onClick={() =>
                applyArrayFilter({ type: "categories", value: category })
              }
            >
              {category}
              <X className="w-3" />
            </Button>
          ))}
        {/* active prices */}
        {filter.price.length > 0 &&
          filter.price.map((price) => (
            <Button
              key={price}
              variant="ghost"
              className="text-xs h-7 bg-muted rounded-full gap-1 text-sky-700"
              onClick={() => applyArrayFilter({ type: "price", value: price })}
            >
              {price}
              <X className="w-3" />
            </Button>
          ))}
      </div>
  )
}

export default ActiveFilters