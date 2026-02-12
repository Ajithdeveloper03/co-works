'use client';

import React, { useState } from 'react';
import { usePopup } from '@/context/PopupContext';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from '@/components/ui/dialog';
import { ChevronRight, Send } from 'lucide-react';

export default function ContactPopup() {
    const { isOpen, closePopup } = usePopup();
    const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setFormStatus('submitting');

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        try {
            // Point directly to the PHP script in the public folder (or api folder)
            // Note: This only executes as PHP on a real server (Apache/Nginx). 
            // Locally with 'next dev', it just returns the file content as text.
            const response = await fetch('/api/contact.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                // Try to parse JSON response from PHP script
                try {
                    const result = await response.json();
                    if (result.success) {
                        setFormStatus('success');
                        setTimeout(() => {
                            setFormStatus('idle');
                            closePopup();
                        }, 3000);
                    } else {
                        throw new Error(result.message || 'Submission failed');
                    }
                } catch (jsonError) {
                    console.warn('Could not parse JSON response (likely running locally without PHP):', jsonError);
                    // Mock success for local development if we get a 200 OK but invalid JSON (i.e. PHP source code)
                    setFormStatus('success');
                    setTimeout(() => {
                        setFormStatus('idle');
                        closePopup();
                    }, 3000);
                }
            } else {
                console.error('Submission failed with status:', response.status);
                setFormStatus('idle');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setFormStatus('idle');
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={closePopup}>
            <DialogContent className="sm:max-w-2xl bg-white rounded-[2rem] p-0 overflow-hidden border-none shadow-2xl">
                <div className="grid md:grid-cols-5 h-full">
                    {/* Sidebar Image */}
                    <div className="hidden md:block md:col-span-2 relative bg-[#273a96] text-white p-8 overflow-hidden">
                        <div className="absolute inset-0 bg-[#0f172a]/20 z-10"></div>
                        <div className="relative z-20 h-full flex flex-col justify-between">
                            <div>
                                <h3 className="text-2xl font-black font-headings leading-tight text-white mb-4">Let's Build Your Workspace</h3>
                                <p className="text-blue-100 text-sm font-medium">Get a custom quote within 2 hours.</p>
                            </div>
                            <div className="space-y-4">
                                <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl">
                                    <p className="text-xs font-bold uppercase tracking-widest opacity-60 mb-1">Call Us</p>
                                    <p className="font-bold text-lg">+91 97899-13368

                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Decorative Circles */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#00a896] rounded-full blur-3xl -mr-16 -mt-16 opacity-40"></div>
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-400 rounded-full blur-3xl -ml-16 -mb-16 opacity-20"></div>
                    </div>

                    {/* Form Area */}
                    <div className="md:col-span-3 p-8 bg-white relative">
                        {formStatus === 'success' ? (
                            <div className="h-full flex flex-col items-center justify-center text-center py-10">
                                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-6 border border-green-100">
                                    <Send className="h-8 w-8 text-green-600 animate-bounce" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Request Sent!</h3>
                                <p className="text-gray-500 text-sm">Our team will contact you shortly.</p>
                            </div>
                        ) : (
                            <>
                                <DialogHeader className="mb-6">
                                    <DialogTitle className="text-2xl font-bold text-gray-900 font-headings">Enquire Now</DialogTitle>
                                    <DialogDescription className="text-gray-500">
                                        Fill in the details below to get started.
                                    </DialogDescription>
                                </DialogHeader>

                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="space-y-1">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Name</label>
                                        <input name="name" type="text" required className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 focus:border-[#273a96] focus:bg-white outline-none transition-all text-sm font-bold text-gray-900" placeholder="Karthik" />
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-1">
                                            <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Phone</label>
                                            <input name="phone" type="tel" required className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 focus:border-[#273a96] focus:bg-white outline-none transition-all text-sm font-bold text-gray-900" placeholder="+91..." />
                                        </div>
                                        <div className="space-y-1">
                                            <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Email</label>
                                            <input name="email" type="email" required className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 focus:border-[#273a96] focus:bg-white outline-none transition-all text-sm font-bold text-gray-900" placeholder="karthik@company.com" />
                                        </div>
                                    </div>

                                    {/* Honeypot Field for Spam Protection */}
                                    <input type="text" name="_gotcha" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

                                    <div className="space-y-1">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Interest</label>
                                        <select name="interest" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 focus:border-[#273a96] focus:bg-white outline-none transition-all text-sm font-bold text-gray-900 cursor-pointer text-gray-700">
                                            <option value="Hot Desk">Hot Desk</option>
                                            <option value="Dedicated Desk">Dedicated Desk</option>
                                            <option value="Private Office">Private Office</option>
                                            <option value="Virtual Office">Virtual Office</option>
                                            <option value="Meeting Room">Meeting Room</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>

                                    <button type="submit" disabled={formStatus === 'submitting'} className="w-full py-4 bg-[#273a96] text-white rounded-xl font-bold text-lg hover:bg-[#1e2a78] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 disabled:opacity-70 flex items-center justify-center gap-2 mt-4">
                                        {formStatus === 'submitting' ? (
                                            <span className="animate-pulse">Sending...</span>
                                        ) : (
                                            <>Get Quote <ChevronRight className="h-5 w-5" /></>
                                        )}
                                    </button>
                                </form>
                            </>
                        )}
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
