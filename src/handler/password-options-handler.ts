import passwordGenerator from "@/shared/utils/generate-password";

export default function passwordOptionsHandler() {
  const checkPasswordOptions = document.querySelectorAll("[type=checkbox]");
  const passwordSize: HTMLInputElement =
    document.querySelector("#length-range")!;
  const passwordOutput: any = document.querySelector("#password-output")!;
  const generate = document.querySelector("#generate");
  const lengthValue: HTMLInputElement =
    document.querySelector("#length-value")!;

  passwordSize.addEventListener("change", (_) => {
    lengthValue.textContent = passwordSize.value;
  });

  generate?.addEventListener("click", (_) => {
    console.log(checkPasswordOptions.values(), checkPasswordOptions);

    const checkPasswordContent = [...checkPasswordOptions] as any;

    let results = [];
    for (let i = 0; i < checkPasswordContent.length; i++) {
      if (checkPasswordContent[i].checked) {
        results.push(checkPasswordContent[i].id);
      }
    }

    passwordOutput.value = passwordGenerator(
      parseInt(passwordSize.value),
      results
    );
  });
  console.log(passwordSize);
}
