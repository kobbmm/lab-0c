export async function POST(request) {
    const formData = await request.formData();
    const date = formData.get('date');

    // ตรวจสอบว่าเป็นวันศุกร์หรือไม่
    const selectedDate = new Date(date);
    const isFriday = selectedDate.getDay() === 5; // วันศุกร์คือ 5

    return new Response(JSON.stringify({ isFriday }), {
        headers: {
            'Content-Type': 'application/json',
        },
    });
}
