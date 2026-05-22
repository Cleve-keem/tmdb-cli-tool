export function formatType(type: string) {
  switch (type) {
    case "playing":
      return "now_playing";
    case "popular":
      return "popular";
    case "top":
      return "top_rated";
    case "upcoming":
      return "upcoming";

    default:
      "Invalid type";
  }
}
