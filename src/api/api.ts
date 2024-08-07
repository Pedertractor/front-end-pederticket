import { availableOptionsQuery } from '../pages/visitorRegistration/VisitorRegistrationForm';
import { VisitorRegistrationType } from '../types/visitor-registration';

const url: string = import.meta.env.VITE_BASE_URL_API;

export async function submitVisitorRegistration(
  FormData: VisitorRegistrationType
) {
  try {
    const response = await fetch(`${url}/ticket/create`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(FormData),
    });
    const data = response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getTicket(publicTicketId: string) {
  try {
    const response = await fetch(`${url}/ticket/${publicTicketId}`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Ticket data não encontrado');
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getAvailableOptions(): Promise<availableOptionsQuery[]> {
  try {
    const response = await fetch(
      // `${import.meta.env.API_URL}/ticket/${publicTicketId}`,
      `${url}/ticket/available-options`,
      {
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
        },
      }
    );
    const data = await response.json();
    return data ? data : [];
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function checkDuplicatedCardNumber(cardNumber: number) {
  try {
    const response = await fetch(
      `${url}/collaborator/check-duplicated/${cardNumber}`,
      {
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
        },
      }
    );

    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
}
