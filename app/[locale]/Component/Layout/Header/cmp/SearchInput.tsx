"use client";

import React, { useRef } from "react";
import styles from "../style/header.module.css";
import { useTranslations } from "next-intl";
import { MenuMobile } from "@cmp/Layout";

interface SearchInputProps {
  onSearch: (searchTerm: string) => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({
  onSearch,
  searchTerm,
  setSearchTerm,
}) => {
  const searchInputRef = useRef<HTMLInputElement | null>(null);
  const t = useTranslations("Search");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);
    onSearch(newSearchTerm);
  };

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
  };

  return (
    <div className={styles.header}>
      <MenuMobile />
      <form
        id="search"
        onSubmit={handleSearchSubmit}
        role="search"
        aria-label={t("Search")}
        className={styles.searchForm}
      >
        <input
          type="search"
          id="search-input"
          name="search"
          autoComplete="off"
          placeholder={t("Search")}
          required
          value={searchTerm}
          onChange={handleSearchChange}
          ref={searchInputRef}
          className={styles.searchInput}
        />
        <button type="submit" aria-label={t("Search")} className={styles.searchButton}>
          <i className="bi bi-search" />
        </button>
      </form>
    </div>
  );
};

export default SearchInput;