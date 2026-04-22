type ScrubRevealTextProps = {
  className?: string;
  text: string;
};

function mergeClassNames(
  ...classes: Array<string | false | null | undefined>
): string {
  return classes.filter(Boolean).join(" ");
}

export function ScrubRevealText({
  className,
  text,
}: ScrubRevealTextProps) {
  return (
    <p className={mergeClassNames("scrubCopy motion-scrub", className)}>
      {text.split(" ").map((word, index) => (
        <span className="motionWord" key={`${word}-${index}`}>
          {word}
        </span>
      ))}
    </p>
  );
}
