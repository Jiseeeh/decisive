import { expect, test } from "@playwright/test";

const url = "http://localhost:3000";

test.describe("valid and invalid inputs", async () => {
  //   selectors
  const inputSelector = '[data-testid="choices-input"]';
  const chooseBtnSelector = '[data-testid="choose-btn"]';
  const modalSelector = '[data-testid="modal-content"]';

  test("invalid input", async ({ page }) => {
    await page.goto(url);

    //   fill choices field
    await page.fill(inputSelector, "Go out - Go out later - Go out tomorrow");

    //   submit
    await page.click(chooseBtnSelector);

    // for custom loading simulation i added on choose click
    await page.waitForTimeout(1600);

    // get modal content
    const modalContent = await page.locator(modalSelector).innerText();

    expect(modalContent).toContain("Error");
  });

  test("valid input", async ({ page }) => {
    await page.goto(url);

    //   fill choices field
    await page.fill(inputSelector, "Go out,Go out later,Go out tomorrow");

    //   submit
    await page.click(chooseBtnSelector);

    // for custom loading simulation i added on choose click
    await page.waitForTimeout(1600);

    // means no error if modal text doesn't include Error message

    expect(
      !(await page.locator(modalSelector).innerText()).includes("Error")
    ).toBeTruthy();
  });
});
