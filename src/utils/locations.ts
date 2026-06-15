// Office locations are now managed in Sanity (see `officeLocation` schema and
// OFFICE_LOCATIONS_QUERY). Consumers fetch them server-side and pass the data
// down as props. This module retains only the shared phone-link helper.

// Build a tel: href from a display phone number — strips non-digits, prefixes +1.
export const telHref = (phone: string) => `tel:+1${phone.replace(/\D/g, "")}`;
