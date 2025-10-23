'use server';

/**
 * @fileOverview Generates a dynamic countdown message for a landing page, calculating the remaining time until a specified expiration date.
 *
 * - generateDynamicCountdown - A function that generates the dynamic countdown message.
 * - GenerateDynamicCountdownInput - The input type for the generateDynamicCountdown function.
 * - GenerateDynamicCountdownOutput - The return type for the generateDynamicCountdown function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateDynamicCountdownInputSchema = z.object({
  expirationDate: z
    .string()
    .describe(
      'The expiration date of the offer in ISO 8601 format (YYYY-MM-DDTHH:mm:ss.sssZ).'
    ),
});
export type GenerateDynamicCountdownInput = z.infer<
  typeof GenerateDynamicCountdownInputSchema
>;

const GenerateDynamicCountdownOutputSchema = z.object({
  countdownMessage: z
    .string()
    .describe(
      'A human-readable string representing the time remaining until the expiration date.'
    ),
});
export type GenerateDynamicCountdownOutput = z.infer<
  typeof GenerateDynamicCountdownOutputSchema
>;

export async function generateDynamicCountdown(
  input: GenerateDynamicCountdownInput
): Promise<GenerateDynamicCountdownOutput> {
  return generateDynamicCountdownFlow(input);
}

const prompt = ai.definePrompt({
  name: 'dynamicCountdownPrompt',
  input: {schema: GenerateDynamicCountdownInputSchema},
  output: {schema: GenerateDynamicCountdownOutputSchema},
  prompt: `You are a marketing expert tasked with creating a compelling countdown message for a limited-time offer. The message should clearly state how much time is remaining until the offer expires.

  The current date and time is: {{now}}
  The offer expires on: {{{expirationDate}}}

  Generate a short, attention-grabbing countdown message to motivate users to take advantage of the offer before it's too late.  The message should include days, hours, minutes, and seconds.
  Use a conversational tone, like a real person describing how much time is left. For example:
  "Hurry! Offer ends in 2 days, 14 hours, 32 minutes, and 17 seconds!"
  Ensure that the message is accurate and reflects the time remaining until the specified expiration date.
  The current date and time and expiration date are passed in ISO 8601 format. Ensure that the math is accurate. Make sure not to include milliseconds in the output string.
`,
});

const generateDynamicCountdownFlow = ai.defineFlow(
  {
    name: 'generateDynamicCountdownFlow',
    inputSchema: GenerateDynamicCountdownInputSchema,
    outputSchema: GenerateDynamicCountdownOutputSchema,
  },
  async input => {
    // Get the current time to pass into prompt to calculate the countdown
    const now = new Date().toISOString();
    const {output} = await prompt({...input, now});
    return output!;
  }
);
