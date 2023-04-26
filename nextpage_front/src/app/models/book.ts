import { Title } from "@angular/platform-browser";
import { Category } from "./category";
import { categories } from "./category";

// export class Book {
//         title: string;
//         authors : string[];
//         categories: Category[];
//         img: string;
//         description: string;

//         constructor(title: string, authors: string[], categories: Category[], img: string, description: string) {
//                 this.title = title;
//                 this.authors = authors;
//                 this.categories = categories;
//                 this.img = img;
//                 this.description = description;
//         }
// }

export interface Book {
        id: number;
        title: string;
        author : string;
        category: Category;
        img: string;
        description: string;
        rating: number;
}


export const books = [
        {
                id: 0,
                title: "NewTitle",
                author: "Helene",
                category: categories[0],
                img:'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1373225763l/17320689.jpg',
                description: 'Did you know that interest in UFO research increased during the 1960s as a result of the Kennedy assassination? Or that America experienced a Satanic Panic in the 1980s that culminated with the longest, most expensive court trial in American history? This book reviews the history, economy, and community of paranormal research in this country, and considers the deeper meaning behind the philosophies and theories surrounding the industry.,Paranormal Nation: Why America Needs Ghosts, UFOs, and Bigfoot, explores the events that have defined paranormal belief systems today. From the birth of religious doctrine, to European witch hunts, to the increasing popularity of the supernatural in American television programming, the author examines the past and present conditions that have fueled interest in the unexplained and considers what this trend means for modern-day America.',
                rating: 3
        },
        {
                id: 0,
                title: "NewTitle",
                author: "Helene",
                category: categories[0],
                img:'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1373225763l/17320689.jpg',
                description: 'Did you know that interest in UFO research increased during the 1960s as a result of the Kennedy assassination? Or that America experienced a Satanic Panic in the 1980s that culminated with the longest, most expensive court trial in American history? This book reviews the history, economy, and community of paranormal research in this country, and considers the deeper meaning behind the philosophies and theories surrounding the industry.,Paranormal Nation: Why America Needs Ghosts, UFOs, and Bigfoot, explores the events that have defined paranormal belief systems today. From the birth of religious doctrine, to European witch hunts, to the increasing popularity of the supernatural in American television programming, the author examines the past and present conditions that have fueled interest in the unexplained and considers what this trend means for modern-day America.',
                rating: 3
        },
        {
                id: 0,
                title: "NewTitle",
                author: "Helene",
                category: categories[0],
                img:'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1373225763l/17320689.jpg',
                description: 'Did you know that interest in UFO research increased during the 1960s as a result of the Kennedy assassination? Or that America experienced a Satanic Panic in the 1980s that culminated with the longest, most expensive court trial in American history? This book reviews the history, economy, and community of paranormal research in this country, and considers the deeper meaning behind the philosophies and theories surrounding the industry.,Paranormal Nation: Why America Needs Ghosts, UFOs, and Bigfoot, explores the events that have defined paranormal belief systems today. From the birth of religious doctrine, to European witch hunts, to the increasing popularity of the supernatural in American television programming, the author examines the past and present conditions that have fueled interest in the unexplained and considers what this trend means for modern-day America.',
                rating: 3
        },
        {
                id: 0,
                title: "NewTitle",
                author: "Helene",
                category: categories[0],
                img:'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1373225763l/17320689.jpg',
                description: 'Did you know that interest in UFO research increased during the 1960s as a result of the Kennedy assassination? Or that America experienced a Satanic Panic in the 1980s that culminated with the longest, most expensive court trial in American history? This book reviews the history, economy, and community of paranormal research in this country, and considers the deeper meaning behind the philosophies and theories surrounding the industry.,Paranormal Nation: Why America Needs Ghosts, UFOs, and Bigfoot, explores the events that have defined paranormal belief systems today. From the birth of religious doctrine, to European witch hunts, to the increasing popularity of the supernatural in American television programming, the author examines the past and present conditions that have fueled interest in the unexplained and considers what this trend means for modern-day America.',
                rating: 3
        },
        {
                id: 0,
                title: "NewTitle",
                author: "Helene",
                category: categories[0],
                img:'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1373225763l/17320689.jpg',
                description: 'Did you know that interest in UFO research increased during the 1960s as a result of the Kennedy assassination? Or that America experienced a Satanic Panic in the 1980s that culminated with the longest, most expensive court trial in American history? This book reviews the history, economy, and community of paranormal research in this country, and considers the deeper meaning behind the philosophies and theories surrounding the industry.,Paranormal Nation: Why America Needs Ghosts, UFOs, and Bigfoot, explores the events that have defined paranormal belief systems today. From the birth of religious doctrine, to European witch hunts, to the increasing popularity of the supernatural in American television programming, the author examines the past and present conditions that have fueled interest in the unexplained and considers what this trend means for modern-day America.',
                rating: 3
        },
        {
                id: 0,
                title: "NewTitle",
                author: "Helene",
                category: categories[0],
                img:'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1373225763l/17320689.jpg',
                description: 'Did you know that interest in UFO research increased during the 1960s as a result of the Kennedy assassination? Or that America experienced a Satanic Panic in the 1980s that culminated with the longest, most expensive court trial in American history? This book reviews the history, economy, and community of paranormal research in this country, and considers the deeper meaning behind the philosophies and theories surrounding the industry.,Paranormal Nation: Why America Needs Ghosts, UFOs, and Bigfoot, explores the events that have defined paranormal belief systems today. From the birth of religious doctrine, to European witch hunts, to the increasing popularity of the supernatural in American television programming, the author examines the past and present conditions that have fueled interest in the unexplained and considers what this trend means for modern-day America.',
                rating: 3
        },
        {
                id: 0,
                title: "NewTitle",
                author: "Helene",
                category: categories[0],
                img:'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1373225763l/17320689.jpg',
                description: 'Did you know that interest in UFO research increased during the 1960s as a result of the Kennedy assassination? Or that America experienced a Satanic Panic in the 1980s that culminated with the longest, most expensive court trial in American history? This book reviews the history, economy, and community of paranormal research in this country, and considers the deeper meaning behind the philosophies and theories surrounding the industry.,Paranormal Nation: Why America Needs Ghosts, UFOs, and Bigfoot, explores the events that have defined paranormal belief systems today. From the birth of religious doctrine, to European witch hunts, to the increasing popularity of the supernatural in American television programming, the author examines the past and present conditions that have fueled interest in the unexplained and considers what this trend means for modern-day America.',
                rating: 3
        },
        {
                id: 0,
                title: "NewTitle",
                author: "Helene",
                category: categories[0],
                img:'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1373225763l/17320689.jpg',
                description: 'Did you know that interest in UFO research increased during the 1960s as a result of the Kennedy assassination? Or that America experienced a Satanic Panic in the 1980s that culminated with the longest, most expensive court trial in American history? This book reviews the history, economy, and community of paranormal research in this country, and considers the deeper meaning behind the philosophies and theories surrounding the industry.,Paranormal Nation: Why America Needs Ghosts, UFOs, and Bigfoot, explores the events that have defined paranormal belief systems today. From the birth of religious doctrine, to European witch hunts, to the increasing popularity of the supernatural in American television programming, the author examines the past and present conditions that have fueled interest in the unexplained and considers what this trend means for modern-day America.',
                rating: 3
        },
        {
                id: 0,
                title: "NewTitle",
                author: "Helene",
                category: categories[0],
                img:'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1373225763l/17320689.jpg',
                description: 'Did you know that interest in UFO research increased during the 1960s as a result of the Kennedy assassination? Or that America experienced a Satanic Panic in the 1980s that culminated with the longest, most expensive court trial in American history? This book reviews the history, economy, and community of paranormal research in this country, and considers the deeper meaning behind the philosophies and theories surrounding the industry.,Paranormal Nation: Why America Needs Ghosts, UFOs, and Bigfoot, explores the events that have defined paranormal belief systems today. From the birth of religious doctrine, to European witch hunts, to the increasing popularity of the supernatural in American television programming, the author examines the past and present conditions that have fueled interest in the unexplained and considers what this trend means for modern-day America.',
                rating: 3
        },
        {
                id: 0,
                title: "NewTitle",
                author: "Helene",
                category: categories[0],
                img:'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1373225763l/17320689.jpg',
                description: 'Did you know that interest in UFO research increased during the 1960s as a result of the Kennedy assassination? Or that America experienced a Satanic Panic in the 1980s that culminated with the longest, most expensive court trial in American history? This book reviews the history, economy, and community of paranormal research in this country, and considers the deeper meaning behind the philosophies and theories surrounding the industry.,Paranormal Nation: Why America Needs Ghosts, UFOs, and Bigfoot, explores the events that have defined paranormal belief systems today. From the birth of religious doctrine, to European witch hunts, to the increasing popularity of the supernatural in American television programming, the author examines the past and present conditions that have fueled interest in the unexplained and considers what this trend means for modern-day America.',
                rating: 3
        },
        {
                id: 0,
                title: "NewTitle",
                author: "Helene",
                category: categories[0],
                img:'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1373225763l/17320689.jpg',
                description: 'Did you know that interest in UFO research increased during the 1960s as a result of the Kennedy assassination? Or that America experienced a Satanic Panic in the 1980s that culminated with the longest, most expensive court trial in American history? This book reviews the history, economy, and community of paranormal research in this country, and considers the deeper meaning behind the philosophies and theories surrounding the industry.,Paranormal Nation: Why America Needs Ghosts, UFOs, and Bigfoot, explores the events that have defined paranormal belief systems today. From the birth of religious doctrine, to European witch hunts, to the increasing popularity of the supernatural in American television programming, the author examines the past and present conditions that have fueled interest in the unexplained and considers what this trend means for modern-day America.',
                rating: 3
        },
        {
                id: 0,
                title: "NewTitle",
                author: "Helene",
                category: categories[0],
                img:'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1373225763l/17320689.jpg',
                description: 'Did you know that interest in UFO research increased during the 1960s as a result of the Kennedy assassination? Or that America experienced a Satanic Panic in the 1980s that culminated with the longest, most expensive court trial in American history? This book reviews the history, economy, and community of paranormal research in this country, and considers the deeper meaning behind the philosophies and theories surrounding the industry.,Paranormal Nation: Why America Needs Ghosts, UFOs, and Bigfoot, explores the events that have defined paranormal belief systems today. From the birth of religious doctrine, to European witch hunts, to the increasing popularity of the supernatural in American television programming, the author examines the past and present conditions that have fueled interest in the unexplained and considers what this trend means for modern-day America.',
                rating: 3
        },
        {
                id: 0,
                title: "NewTitle",
                author: "Helene",
                category: categories[0],
                img:'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1373225763l/17320689.jpg',
                description: 'Did you know that interest in UFO research increased during the 1960s as a result of the Kennedy assassination? Or that America experienced a Satanic Panic in the 1980s that culminated with the longest, most expensive court trial in American history? This book reviews the history, economy, and community of paranormal research in this country, and considers the deeper meaning behind the philosophies and theories surrounding the industry.,Paranormal Nation: Why America Needs Ghosts, UFOs, and Bigfoot, explores the events that have defined paranormal belief systems today. From the birth of religious doctrine, to European witch hunts, to the increasing popularity of the supernatural in American television programming, the author examines the past and present conditions that have fueled interest in the unexplained and considers what this trend means for modern-day America.',
                rating: 3
        },
        {
                id: 0,
                title: "NewTitle",
                author: "Helene",
                category: categories[0],
                img:'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1373225763l/17320689.jpg',
                description: 'Did you know that interest in UFO research increased during the 1960s as a result of the Kennedy assassination? Or that America experienced a Satanic Panic in the 1980s that culminated with the longest, most expensive court trial in American history? This book reviews the history, economy, and community of paranormal research in this country, and considers the deeper meaning behind the philosophies and theories surrounding the industry.,Paranormal Nation: Why America Needs Ghosts, UFOs, and Bigfoot, explores the events that have defined paranormal belief systems today. From the birth of religious doctrine, to European witch hunts, to the increasing popularity of the supernatural in American television programming, the author examines the past and present conditions that have fueled interest in the unexplained and considers what this trend means for modern-day America.',
                rating: 3
        },
        {
                id: 0,
                title: "NewTitle",
                author: "Helene",
                category: categories[0],
                img:'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1373225763l/17320689.jpg',
                description: 'Did you know that interest in UFO research increased during the 1960s as a result of the Kennedy assassination? Or that America experienced a Satanic Panic in the 1980s that culminated with the longest, most expensive court trial in American history? This book reviews the history, economy, and community of paranormal research in this country, and considers the deeper meaning behind the philosophies and theories surrounding the industry.,Paranormal Nation: Why America Needs Ghosts, UFOs, and Bigfoot, explores the events that have defined paranormal belief systems today. From the birth of religious doctrine, to European witch hunts, to the increasing popularity of the supernatural in American television programming, the author examines the past and present conditions that have fueled interest in the unexplained and considers what this trend means for modern-day America.',
                rating: 3
        },
        {
                id: 0,
                title: "NewTitle",
                author: "Helene",
                category: categories[0],
                img:'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1373225763l/17320689.jpg',
                description: 'Did you know that interest in UFO research increased during the 1960s as a result of the Kennedy assassination? Or that America experienced a Satanic Panic in the 1980s that culminated with the longest, most expensive court trial in American history? This book reviews the history, economy, and community of paranormal research in this country, and considers the deeper meaning behind the philosophies and theories surrounding the industry.,Paranormal Nation: Why America Needs Ghosts, UFOs, and Bigfoot, explores the events that have defined paranormal belief systems today. From the birth of religious doctrine, to European witch hunts, to the increasing popularity of the supernatural in American television programming, the author examines the past and present conditions that have fueled interest in the unexplained and considers what this trend means for modern-day America.',
                rating: 3
        },
]