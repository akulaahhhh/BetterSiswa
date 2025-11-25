import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

//This matcher will match any URL that starts with /dashboard
const isStudentDashboardRoute = createRouteMatcher(['/dashboard(.*)'])
//This matcher wil match any URL that starts with /dashboard/admin * For Admin only
const isAdminRoute = createRouteMatcher(['/dashboard/admin(.*)'])

export default clerkMiddleware( async(req,auth) =>{
    //afterauth can be use after clerk has authenticated the user
    
    }
);

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};