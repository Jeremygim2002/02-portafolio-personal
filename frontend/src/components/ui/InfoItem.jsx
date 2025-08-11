export default function InfoItem({ label, value, link }) {
  return (
    <li>
      <span className="font-medium text-heading">{label}:</span>{" "}
      {link ? (
        <a
          href={link}
          className="text-accent hover:underline"
          target="_blank"
          rel="noreferrer"
        >
          {value}
        </a>
      ) : (
        value
      )}
    </li>
  );
}
