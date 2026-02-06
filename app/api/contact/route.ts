import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const data = await request.json();

        // Placeholder for Laravel backend integration
        // Replace 'https://your-laravel-backend.com/api/contact' with your actual endpoint
        const LARAVEL_API_URL = process.env.LARAVEL_API_URL || 'https://example.com/api/contact';

        console.log('Received contact form data:', data);

        // If a LARAVEL_API_URL is configured (and not the example), forward the request
        if (process.env.LARAVEL_API_URL) {
            const response = await fetch(LARAVEL_API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error(`Laravel API responded with status: ${response.status}`);
            }

            const result = await response.json();
            return NextResponse.json({ success: true, data: result });
        }

        // Fallback Mock success for now since we don't have the actual URL
        // In production, you should ensure LARAVEL_API_URL is set
        return NextResponse.json({ success: true, message: "Form received. Backend integration pending." });

    } catch (error) {
        console.error('Error processing contact form:', error);
        return NextResponse.json(
            { success: false, error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
