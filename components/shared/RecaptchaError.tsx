interface RecaptchaErrorProps {
  errorMessage: string;
}

export const RecaptchaError = ({ errorMessage }: RecaptchaErrorProps) => {
  return (
    <div className="animate-fade-in">
      <div className="border-error bg-error-background flex w-full flex-col items-center justify-center rounded-3xl border-1 p-[30px_35px] text-center text-lg">
        <p className="text-error m-0 mb-4 max-w-[30ch] p-0">{errorMessage}</p>
      </div>
    </div>
  );
};
