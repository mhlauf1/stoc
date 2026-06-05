// Single source of truth for STOC Advisory office locations.
// Authored in alphabetical order by city so every consumer (Locations page,
// Footer, Contact page) renders the offices consistently.

export interface OfficeLocation {
  city: string;
  address: string;
  phone: string;
}

export const officeLocations: OfficeLocation[] = [
  {
    city: "Baltimore, MD",
    address: "600 Baltimore Ave., Suite 205, Towson, MD 21204",
    phone: "(410) 812-6927",
  },
  {
    city: "Dallas, TX",
    address: "3626 N Hall Street, Suite 803, Dallas, TX 75219",
    phone: "(218) 244-8082",
  },
  {
    city: "Minneapolis, MN",
    address: "7400 Metro Blvd., Suite 450, Edina, MN 55439",
    phone: "(218) 244-8082",
  },
  {
    city: "Nashville, TN",
    address: "6200 Tennessee 100, Suite 302, Nashville, TN 37205",
    phone: "(615) 516-2362",
  },
  {
    city: "Ponte Vedra Beach, FL",
    address: "90 Fort Wade Rd., Suite 100, Ponte Vedra Beach, FL 32081",
    phone: "(410) 812-6927",
  },
];

// Build a tel: href from a display phone number — strips non-digits, prefixes +1.
export const telHref = (phone: string) => `tel:+1${phone.replace(/\D/g, "")}`;
