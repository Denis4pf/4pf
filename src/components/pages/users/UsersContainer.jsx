import React from "react";

// config
import { API_REQUEST } from "../../../config/config";

// utils
import POST_CACHE from "../../../utils/cache";

export default function Users() {
  const [maxRange, setMaxRange] = useState(ITEMS_FOR_PAGE);
  const [minRange, setMinRange] = useState(0);

    const [users, setUsers] = useState(null)
}
