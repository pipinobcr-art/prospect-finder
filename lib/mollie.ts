const MOLLIE_API_KEY = process.env.MOLLIE_API_KEY!;
const APP_URL = process.env.NEXT_PUBLIC_APP_URL!;

const mollieHeaders = {
  'Authorization': `Bearer ${MOLLIE_API_KEY}`,
  'Content-Type': 'application/json',
};

export async function createMollieCustomer(email: string, name: string) {
  const res = await fetch('https://api.mollie.com/v2/customers', {
    method: 'POST', headers: mollieHeaders,
    body: JSON.stringify({ email, name }),
  });
  if (!res.ok) throw new Error(`Mollie customer error: ${await res.text()}`);
  return res.json();
}

export async function createFirstPayment({ customerId, amount, description, plan, userId }: {
  customerId: string; amount: string; description: string; plan: string; userId: string;
}) {
  const res = await fetch('https://api.mollie.com/v2/payments', {
    method: 'POST', headers: mollieHeaders,
    body: JSON.stringify({
      amount: { currency: 'EUR', value: amount },
      customerId, sequenceType: 'first', description,
      redirectUrl: `${APP_URL}/billing/success?plan=${plan}`,
      webhookUrl: `${APP_URL}/api/webhooks/mollie`,
      metadata: { userId, plan },
    }),
  });
  if (!res.ok) throw new Error(`Mollie payment error: ${await res.text()}`);
  return res.json();
}

export async function getPayment(paymentId: string) {
  const res = await fetch(`https://api.mollie.com/v2/payments/${paymentId}`, {
    headers: mollieHeaders,
  });
  if (!res.ok) throw new Error(`Mollie get payment error: ${await res.text()}`);
  return res.json();
}

export async function getMandates(customerId: string) {
  const res = await fetch(`https://api.mollie.com/v2/customers/${customerId}/mandates`, {
    headers: mollieHeaders,
  });
  if (!res.ok) throw new Error(`Mollie mandates error: ${await res.text()}`);
  return res.json();
}

export async function revokeMandate(customerId: string, mandateId: string) {
  const res = await fetch(`https://api.mollie.com/v2/customers/${customerId}/mandates/${mandateId}`, {
    method: 'DELETE', headers: mollieHeaders,
  });
  return res.ok;
}

export const PLAN_PRICES: Record<string, { amount: string; label: string }> = {
  standard: { amount: '29.00', label: 'Prospect Finder Standard — 29€/mois' },
  premium:  { amount: '79.00', label: 'Prospect Finder Premium — 79€/mois' },
};
