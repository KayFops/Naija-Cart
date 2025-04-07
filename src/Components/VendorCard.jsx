import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Star } from "lucide-react";

export function VendorCard({ id, name, image, description, rating }) {
  return (
    <Link to={`/vendors/${id}`}>
      <Card className="overflow-hidden transition-all hover:shadow-lg">
        <div className="aspect-video overflow-hidden">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover transition-transform hover:scale-105"
          />
        </div>
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium">{name}</h3>
            <div className="flex items-center">
              <Star className="mr-1 h-4 w-4 fill-naija-yellow text-naija-yellow" />
              <span>{rating}</span>
            </div>
          </div>
          <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
            {description}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}
