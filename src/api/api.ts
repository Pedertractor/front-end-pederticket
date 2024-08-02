import { VisitorRegistrationType } from '../types/visitor-registration';

export async function submitVisitorRegistration(
  FormData: VisitorRegistrationType
) {
  try {
    const response = await fetch(`${process.env.API_URL}/scheduling/create`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(FormData),
    });

    // const data = await response.json();

    // if (!response.ok) {
    //   return data.errors;
    // }
    console.log(response);

    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function getTicket(publicTicketId: string) {
  try {
    const response = await fetch(
      `${process.env.API_URL}/scheduling/${publicTicketId}`,
      {
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
        },
      }
    );

    return response;
  } catch (error) {
    console.log(error);
  }
}
